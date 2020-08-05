var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "world": "world",
            "imgextension": "png",
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "maxZoom": 8,
            "last_rendertime": 1596664579,
            "base": "",
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "poititle": "Markers",
            "name": "Daytime Render",
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "path": "day",
            "showlocationmarker": true
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "compass": true,
            "zoom": true,
            "spawn": true,
            "mapType": true,
            "pan": true,
            "overlays": true
        },
        "debug": true,
        "cacheTag": "1596664963"
    },
    "worlds": [
        "world"
    ]
};
