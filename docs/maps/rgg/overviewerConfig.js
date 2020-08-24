var overviewerConfig = {
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "path": "day",
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "base": "",
            "showlocationmarker": true,
            "name": "Daytime Render",
            "maxZoom": 8,
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "isOverlay": false,
            "north_direction": 0,
            "last_rendertime": 1598244979,
            "minZoom": 0,
            "defaultZoom": 1,
            "world": "world",
            "zoomLevels": 8
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "overlays": true,
            "pan": true,
            "mapType": true,
            "compass": true,
            "zoom": true,
            "coordsBox": true
        },
        "debug": true,
        "cacheTag": "1598245367"
    },
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png"
        },
        "mapDivId": "mcmap"
    }
};
