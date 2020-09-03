var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "center": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "zoomLevels": 8,
            "north_direction": 0,
            "path": "day",
            "base": "",
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "world": "world",
            "name": "Daytime Render",
            "last_rendertime": 1599094579,
            "defaultZoom": 1,
            "maxZoom": 8,
            "isOverlay": false,
            "minZoom": 0
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1599094970",
        "debug": true,
        "controls": {
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "compass": true,
            "pan": true,
            "spawn": true,
            "overlays": true
        }
    },
    "worlds": [
        "world"
    ]
};
