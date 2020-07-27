var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "path": "day",
            "zoomLevels": 10,
            "maxZoom": 10,
            "last_rendertime": 1595869080,
            "base": "",
            "poititle": "Markers",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "minZoom": 0,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "name": "Daytime Render",
            "imgextension": "png",
            "world": "Core01"
        }
    ],
    "map": {
        "cacheTag": "1595869282",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "spawn": true,
            "coordsBox": true,
            "zoom": true,
            "overlays": true,
            "compass": true,
            "mapType": true
        }
    },
    "worlds": [
        "Core01"
    ]
};
