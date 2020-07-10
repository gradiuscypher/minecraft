var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "defaultZoom": 1,
            "path": "day",
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
            "showlocationmarker": true,
            "imgextension": "png",
            "base": "",
            "zoomLevels": 9,
            "name": "Daytime Render",
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "world": "Core01",
            "last_rendertime": 1594410864,
            "north_direction": 0,
            "maxZoom": 9,
            "poititle": "Markers"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "zoom": true,
            "mapType": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "compass": true,
            "pan": true
        },
        "cacheTag": "1594411706"
    },
    "worlds": [
        "Core01"
    ]
};
