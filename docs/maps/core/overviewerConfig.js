var overviewerConfig = {
    "map": {
        "cacheTag": "1597748483",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "overlays": true,
            "zoom": true,
            "mapType": true,
            "coordsBox": true,
            "spawn": true,
            "compass": true
        }
    },
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png"
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "path": "day",
            "minZoom": 0,
            "zoomLevels": 10,
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "base": "",
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "maxZoom": 10,
            "isOverlay": false,
            "world": "Core01",
            "last_rendertime": 1597748280,
            "defaultZoom": 1,
            "imgextension": "png"
        }
    ]
};
