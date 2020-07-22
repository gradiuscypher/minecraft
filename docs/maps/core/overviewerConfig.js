var overviewerConfig = {
    "CONST": {
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    },
    "map": {
        "debug": true,
        "cacheTag": "1595404881",
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true,
            "compass": true,
            "spawn": true
        }
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "last_rendertime": 1595404680,
            "poititle": "Markers",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "path": "day",
            "maxZoom": 9,
            "imgextension": "png",
            "defaultZoom": 1,
            "zoomLevels": 9,
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
            "base": "",
            "world": "Core01",
            "isOverlay": false,
            "name": "Daytime Render"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
