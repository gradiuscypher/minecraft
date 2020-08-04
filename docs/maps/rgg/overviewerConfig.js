var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png"
        },
        "tileSize": 384,
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "coordsBox": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "zoom": true,
            "overlays": true,
            "mapType": true
        },
        "cacheTag": "1596560569"
    },
    "tilesets": [
        {
            "path": "day",
            "north_direction": 0,
            "imgextension": "png",
            "isOverlay": false,
            "base": "",
            "maxZoom": 8,
            "name": "Daytime Render",
            "zoomLevels": 8,
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "world": "world",
            "last_rendertime": 1596560179,
            "minZoom": 0
        }
    ]
};
