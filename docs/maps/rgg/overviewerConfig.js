var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "coordsBox": true,
            "zoom": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1596233004"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "path": "day",
            "poititle": "Markers",
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "maxZoom": 8,
            "world": "world",
            "zoomLevels": 8,
            "name": "Daytime Render",
            "isOverlay": false,
            "last_rendertime": 1596232579,
            "base": "",
            "showlocationmarker": true,
            "north_direction": 0
        }
    ]
};
