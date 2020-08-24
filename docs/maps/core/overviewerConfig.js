var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "mapDivId": "mcmap"
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1598277685",
        "debug": true,
        "controls": {
            "overlays": true,
            "spawn": true,
            "zoom": true,
            "pan": true,
            "mapType": true,
            "compass": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "minZoom": 0,
            "isOverlay": false,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "world": "Core01",
            "showlocationmarker": true,
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "path": "day",
            "maxZoom": 10,
            "last_rendertime": 1598277480,
            "imgextension": "png",
            "base": ""
        }
    ]
};
