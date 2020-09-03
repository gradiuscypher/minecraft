var overviewerConfig = {
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1599102086",
        "controls": {
            "overlays": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true
        }
    },
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "tileSize": 384
    },
    "tilesets": [
        {
            "minZoom": 0,
            "poititle": "Markers",
            "base": "",
            "imgextension": "png",
            "isOverlay": false,
            "north_direction": 0,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "maxZoom": 10,
            "defaultZoom": 1,
            "name": "Daytime Render",
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1599101880,
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ]
        }
    ],
    "worlds": [
        "Core01"
    ]
};
